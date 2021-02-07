import "./App.css";

function App() {
  return (
    <div>
      <form>
        <label>Email:</label>
        <input type="text" name="email" />
        <label>Password:</label>
        <input type="password" name="password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
