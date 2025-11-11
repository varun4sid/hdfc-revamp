import "./App.css";
import CalculateReturns from "./components/CalculateReturns";
import FDCard from "./components/FDCard";
import FDComparison from "./components/FDComparison";
import RatesTable from "./components/RatesTable";

function App() {
    return (
        <div className="container min-h-screen w-full bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
            <div className="column1">
                <FDCard />
                <RatesTable />
                <FDComparison />
            </div>
            <div className="column2">
                <CalculateReturns />
            </div>
        </div>
    );
}

export default App;
