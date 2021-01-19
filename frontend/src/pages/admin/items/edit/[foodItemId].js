import { useRouter } from "next/router";

function EditFoodItem() {
  const router = useRouter();
  const { foodItemId } = router.query;
  return <div>{foodItemId}</div>;
}

export default EditFoodItem;
