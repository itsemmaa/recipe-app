import RecipeForm from "../components/RecipeForm";

const AddPage = () => {
  return (
    <div 
      className="add-page" 
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}
    >
      <RecipeForm />
    </div>
  );
};

export default AddPage;
