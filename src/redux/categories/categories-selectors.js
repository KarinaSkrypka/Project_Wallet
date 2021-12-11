const getAllCategories = state => state.categories.categories;

const loading = state => state.categories.isLoading;

const categorySelectors = {
  getAllCategories,
  loading,
};
export default categorySelectors;
