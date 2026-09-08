import { Button } from "../components/ui/Button";
import { Card } from "../components/common/Card";
import { Table } from "../components/common/Table";
import "../App.css"

export function Home() {
  const students = [
    { name: "Sara", age: 21, city: "Cairo" },
    { name: "Omar", age: 23, city: "Giza" },
    { name: "Lina", age: 22, city: "Tanta" },
  ];

  return (
    <div className="home">
      <section className="section">
        <h2>Buttons</h2>
        <div className="row">
          <Button text="Save" variant="primary" onClick={() => alert("Saved!")} />
          <Button text="Cancel" variant="secondary" onClick={() => alert("Cancelled")} />
          <Button text="Delete" variant="danger" disabled />
        </div>
      </section>

      <section className="section">
        <h2>Cards</h2>
        <div className="row cards">
          <Card
            title="Product A"
            description="A sleek, minimal product built for everyday use."
          />
          <Card title="Product B" description="Comes with extra features and support.">
            <Button text="Buy now" variant="secondary" onClick={() => alert("Bought!")} />
          </Card>
        </div>
      </section>

      <section className="section">
        <h2>Student Records</h2>
        <Table columns={["Name", "Age", "City"]} data={students} striped />
      </section>
    </div>
  );
}