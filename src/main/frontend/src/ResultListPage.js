import Header from './component/Header';
import ContentList from "./component/ContentList";
import Chart from './component/Chart';
import AddContent from './component/AddContent';
import Footer from './component/Footer';


function ResultListPage() {
    return(
        <div>
            <Header />
            <ContentList/>
            <Chart />
            <AddContent />
            <Footer />
        </div>
        
    );
};


export default ResultListPage;