import { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ friend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [yourExpenses, setYourExpenses] = useState("");
  const [paying, setPaying] = useState("user");
  const friendExpenses = bill ? bill - yourExpenses : "";

  const handleSplitBill = (e) => {
    e.preventDefault();
    if (!bill || !yourExpenses) return;
    onSplitBill( paying === "user" ? friendExpenses : -yourExpenses);
    setBill("");
    setYourExpenses("");
    setPaying("user");
  };
  return (
    <form className="form-split-bill" onSubmit={handleSplitBill}>
      <h2>Split a bill with {friend.name}</h2>

      <label>💸Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🕴️Your expense</label>
      <input
        type="text"
        value={yourExpenses}
        onChange={(e) => setYourExpenses(Number(e.target.value) > bill ? yourExpenses : Number(e.target.value))}
      />
      <label>🧑‍🤝‍🧑{friend.name}'s expenses</label>
      <input type="text" value={friendExpenses} disabled />
      <label>🤭Who is paying the bill?</label>
      <select value={paying} onChange={(e) => setPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};
export default FormSplitBill;
