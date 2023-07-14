import { Review as ReviewType } from "../types";

type Props = {
  review: ReviewType;
};

export const Review: React.FC<Props> = ({ review }) => {
  return (
    <div className="border p-4 rounded-md">
      <h3 className="font-bold text-lg">{review.author}</h3>
      <p>{review.content}</p>
    </div>
  );
};
