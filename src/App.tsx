import "./App.css";
import CalculateReturns from "./components/CalculateReturns";
import FDCard from "./components/FDCard";
import FDComparison from "./components/FDComparison";
import Footer from "./components/Footer";
import RatesTable from "./components/RatesTable";

function App() {
    return (
        <>
            <div className="container w-full bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
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
