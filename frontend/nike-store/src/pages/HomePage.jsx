import Button from "../components/Button";

export default function HomePage() {
  return (
    <>
      <h1>Nike Home Page</h1>
      <Button onClick={() => console.log("SHOP!")} className="button-black">
        Shop
      </Button>

      <div id="test">
        <Button
          onClick={() => console.log("LEARN MORE!")}
          className="button-white"
        >
          Learn More
        </Button>
      </div>

      <Button onClick={() => console.log("MOVE!")} className="button-gray">
        5/7
      </Button>

      <div>
        <Button className="button-black">Join Us</Button>
      </div>
      
    </>
  );
}
