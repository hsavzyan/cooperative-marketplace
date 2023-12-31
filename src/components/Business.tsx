import { Business as BusinessType, Review as ReviewType } from "../types";
import { Product } from "./Product";
import { Review } from "./Review";
import { useState } from "react";

type Props = {
  business: BusinessType;
};

export const Business: React.FC<Props> = ({ business }) => {
  const [reviews, setReviews] = useState<ReviewType[]>(business.reviews);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [showAllReviews, setShowAllReviews] = useState(false);

  const leaveReview = (event: React.FormEvent) => {
    event.preventDefault();

    const newReview: ReviewType = {
      id: Math.random().toString(),
      author,
      content,
    };

    setReviews((prevReviews) => [...prevReviews, newReview]);

    setAuthor("");
    setContent("");
  };

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 2);

  return (
    <div className="border border-secondary p-4 rounded-md mb-4 shadow-md">
      <h1 className="font-semibold text-2xl mb-2">{business.name}</h1>
      <p className="mb-4">{business.description}</p>

      <h2 className="font-semibold text-xl mb-2">Products</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {business.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <h2 className="font-semibold text-xl mb-2">Reviews</h2>
      <div className="space-y-4">
        {displayedReviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
      {!showAllReviews && reviews.length > 2 && (
        <button
          onClick={() => setShowAllReviews(true)}
          className="w-full py-2 mt-4 bg-accent text-light rounded-md hover:bg-accent-dark"
        >
          Show more reviews
        </button>
      )}

      <h2 className="font-semibold text-xl mb-2">Leave a Review</h2>
      <form onSubmit={leaveReview} className="space-y-2">
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 border border-secondary rounded-md shadow-md text-dark"
          required
        />
        <textarea
          placeholder="Your review"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-secondary rounded-md shadow-md text-dark"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-accent text-light rounded-md hover:bg-accent-dark"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Business;
