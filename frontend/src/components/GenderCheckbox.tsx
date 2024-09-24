const GenderCheckbox = ({
  selectedGender,
  onCheckboxChange,
}: {
  selectedGender: string;
  onCheckboxChange: (gender: "male" | "female") => void;
}) => {
  return (
    <div className="mb-3">
      <label className="form-label fw-bold">Gender</label>
      <div>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={selectedGender === "male"}
          onChange={() => onCheckboxChange("male")}
        />
        <label htmlFor="male" className="ms-1">
          Male
        </label>
      </div>
      <div>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={selectedGender === "female"}
          onChange={() => onCheckboxChange("female")}
        />
        <label htmlFor="female" className="ms-1">
          Female
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
