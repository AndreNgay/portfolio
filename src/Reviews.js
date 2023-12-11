import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [relationship, setRelationship] = useState('workmate');
  const { id } = useParams();

  useEffect(() => {
    // Fetch reviews from the json-server on component mount
    fetch(`http://localhost:4000/reviews?${id ? `id=${id}` : ''}`)
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, [id]);

  const handleInputChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleRelationshipChange = (e) => {
    setRelationship(e.target.value);
  };

  const handleAddReview = () => {
    if (newReview.trim() !== '') {
      // Add new review to json-server
      fetch('http://localhost:4000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ review: newReview, relationship }),
      });

      setReviews([...reviews, { id: reviews.length + 1, review: newReview, relationship }]);
      setNewReview('');
    }
  };

  const handleDeleteReview = (reviewId) => {
    // Delete review from json-server
    fetch(`http://localhost:4000/reviews/${reviewId}`, {
      method: 'DELETE',
    });

    const updatedReviews = reviews.filter((review) => review.id !== reviewId);
    setReviews(updatedReviews);
  };

  return (
    <div>
      <h2 className="section-heading">Reviews</h2>

      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Write a review..."
          value={newReview}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label className="mr-2">Relationship:</label>
        <select value={relationship} onChange={handleRelationshipChange}>
          <option value="workmate">Workmate</option>
          <option value="classmate">Classmate</option>
          <option value="friend">Friend</option>
        </select>
      </div>

      <button className="btn btn-dark" onClick={handleAddReview}>
        Add Review
      </button>

      <div className="mt-4">
        <h3>Reviews:</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {reviews.map((review) => (
              <li key={review.id} className="mb-3">
                {review.review} - {review.relationship}
                <button
                  className="btn btn-danger btn-sm ml-2"
                  onClick={() => handleDeleteReview(review.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Reviews;
