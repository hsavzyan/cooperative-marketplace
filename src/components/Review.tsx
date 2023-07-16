import { Review as ReviewType } from "../types";

type Props = {
  review: ReviewType;
};

export const Review: React.FC<Props> = ({ review }) => {
  return (
    <div className="border border-secondary p-4 rounded-md shadow-md">
      <h3 className="font-semibold text-lg">{review.author}</h3>
      <p>{review.content}</p>
    </div>
  );
};
