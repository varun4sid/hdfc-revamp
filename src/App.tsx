import "./App.css";
import CalculateReturns from "./components/CalculateReturns";
import FDCard from "./components/FDCard";
import FDComparison from "./components/FDComparison";
import Footer from "./components/Footer";
import RatesTable from "./components/RatesTable";

function App() {
    return (
        <>
            <div className="container">
                <div className="column1">
                    <FDCard />
                    <RatesTable />
                    <FDComparison />
                </div>
                <div className="column2">
                    <CalculateReturns />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
