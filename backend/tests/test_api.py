"""
Backend API Tests for Yashoda Total Solution Website
Tests:
- Health check endpoint (/)
- Reviews API (POST /api/reviews)
- Contacts API (POST /api/contacts)
"""
import pytest
import requests
import os
import uuid

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestHealthCheck:
    """Health check endpoint tests"""
    
    def test_root_endpoint_returns_200(self):
        """Test that the root API endpoint is accessible"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert data["message"] == "Hello World"


class TestReviewsAPI:
    """Review submission endpoint tests"""
    
    def test_create_review_success(self):
        """Test successful review submission"""
        unique_name = f"TEST_Reviewer_{uuid.uuid4().hex[:8]}"
        payload = {
            "customer_name": unique_name,
            "city": "Mumbai",
            "rating": 5,
            "review_message": "Great service! Highly recommended."
        }
        
        response = requests.post(
            f"{BASE_URL}/api/reviews",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        # Status assertion
        assert response.status_code == 200
        
        # Data assertions
        data = response.json()
        assert "id" in data
        assert data["customer_name"] == unique_name
        assert data["city"] == "Mumbai"
        assert data["rating"] == 5
        assert data["review_message"] == "Great service! Highly recommended."
        assert data["approved"] == False  # New reviews are not approved by default
        assert "created_at" in data
    
    def test_create_review_with_min_rating(self):
        """Test review with minimum rating (1)"""
        unique_name = f"TEST_MinRating_{uuid.uuid4().hex[:8]}"
        payload = {
            "customer_name": unique_name,
            "city": "Pune",
            "rating": 1,
            "review_message": "Test minimum rating"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/reviews",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        assert response.status_code == 200
        data = response.json()
        assert data["rating"] == 1
    
    def test_create_review_with_max_rating(self):
        """Test review with maximum rating (5)"""
        unique_name = f"TEST_MaxRating_{uuid.uuid4().hex[:8]}"
        payload = {
            "customer_name": unique_name,
            "city": "Nagpur",
            "rating": 5,
            "review_message": "Test maximum rating"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/reviews",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        assert response.status_code == 200
        data = response.json()
        assert data["rating"] == 5
    
    def test_create_review_invalid_rating_too_high(self):
        """Test review with invalid rating (>5) should fail"""
        payload = {
            "customer_name": "Test User",
            "city": "Mumbai",
            "rating": 6,
            "review_message": "Invalid rating test"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/reviews",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        # Should fail validation
        assert response.status_code == 422
    
    def test_create_review_invalid_rating_too_low(self):
        """Test review with invalid rating (<1) should fail"""
        payload = {
            "customer_name": "Test User",
            "city": "Mumbai",
            "rating": 0,
            "review_message": "Invalid rating test"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/reviews",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        # Should fail validation
        assert response.status_code == 422
    
    def test_create_review_missing_required_fields(self):
        """Test review with missing required fields should fail"""
        payload = {
            "customer_name": "Test User"
            # Missing city, rating, review_message
        }
        
        response = requests.post(
            f"{BASE_URL}/api/reviews",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        # Should fail validation
        assert response.status_code == 422
    
    def test_get_approved_reviews(self):
        """Test getting approved reviews (only approved ones should appear)"""
        response = requests.get(f"{BASE_URL}/api/reviews")
        
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        # All returned reviews should be approved
        for review in data:
            assert review.get("approved") == True


class TestContactsAPI:
    """Contact form submission endpoint tests"""
    
    def test_create_contact_success(self):
        """Test successful contact form submission"""
        unique_name = f"TEST_Contact_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": unique_name,
            "phone": "+919876543210",
            "message": "I need help with my insurance claim."
        }
        
        response = requests.post(
            f"{BASE_URL}/api/contacts",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        # Status assertion
        assert response.status_code == 200
        
        # Data assertions
        data = response.json()
        assert "id" in data
        assert data["name"] == unique_name
        assert data["phone"] == "+919876543210"
        assert data["message"] == "I need help with my insurance claim."
        assert "created_at" in data
    
    def test_create_contact_with_different_phone_format(self):
        """Test contact with different phone formats"""
        unique_name = f"TEST_Phone_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": unique_name,
            "phone": "9876543210",  # Without country code
            "message": "Test phone format"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/contacts",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        assert response.status_code == 200
        data = response.json()
        assert data["phone"] == "9876543210"
    
    def test_create_contact_missing_required_fields(self):
        """Test contact with missing required fields should fail"""
        payload = {
            "name": "Test User"
            # Missing phone and message
        }
        
        response = requests.post(
            f"{BASE_URL}/api/contacts",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        # Should fail validation
        assert response.status_code == 422
    
    def test_create_contact_long_message(self):
        """Test contact with a long message"""
        unique_name = f"TEST_LongMsg_{uuid.uuid4().hex[:8]}"
        long_message = "I have a serious issue with my insurance claim. " * 20
        payload = {
            "name": unique_name,
            "phone": "+919876543210",
            "message": long_message
        }
        
        response = requests.post(
            f"{BASE_URL}/api/contacts",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        assert response.status_code == 200
        data = response.json()
        assert data["message"] == long_message


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
