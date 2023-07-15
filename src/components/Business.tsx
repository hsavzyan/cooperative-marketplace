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

  return (
    <div className="border border-blue-300 p-4 rounded-md mb-4 shadow-md">
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
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>

      <h2 className="font-semibold text-xl mb-2">Leave a Review</h2>
      <form onSubmit={leaveReview} className="space-y-2">
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 border border-blue-300 rounded-md shadow-md"
          required
        />
        <textarea
          placeholder="Your review"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-blue-300 rounded-md shadow-md"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
