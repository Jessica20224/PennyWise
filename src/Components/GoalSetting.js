// GoalSetting.js
import React, { useState } from "react";

function GoalSetting() {
  const [goal, setGoal] = useState({ name: "", targetAmount: 0, savedAmount: 0 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGoal({ ...goal, [name]: parseFloat(value) });
  };

  const handleSave = () => {
    alert(`Goal "${goal.name}" saved!`);
  };

  const progress = ((goal.savedAmount / goal.targetAmount) * 100).toFixed(2);

  return (
    <div>
      <h3>Set Financial Goal</h3>
      <input type="text" name="name" placeholder="Goal Name" onChange={handleInputChange} />
      <input type="number" name="targetAmount" placeholder="Target Amount" onChange={handleInputChange} />
      <input type="number" name="savedAmount" placeholder="Saved Amount" onChange={handleInputChange} />
      <button onClick={handleSave}>Save Goal</button>
      <div>
        <p>Progress: {progress}%</p>
      </div>
    </div>
  );
}

export default GoalSetting