import Header from './component/Header';
import ContentList from "./component/ContentList";
import ChartComponent from './component/ChartComponent';
import AddContent from './component/AddContent';
import Footer from './component/Footer';


function ResultListPage() {
    return(
        <div>
            <Header />
            <ContentList/>
            <ChartComponent />
            <AddContent />
            <Footer />
        </div>
        
    );
};


export default ResultListPage;