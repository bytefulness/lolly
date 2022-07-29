export default {
  name: "postedBy",
  title: "Posted By",
  type: "reference", // Meaning that this field is a reference to another document
  to: [{ type: "user" }],
};
