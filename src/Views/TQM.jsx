import "../App.css";
import CardComponent from "../components/CardComponent";
import { Utils } from "../components/Utils";
import TopButtons from "../components/TopButtons";
import InputCalender from "../components/InputCalender";
function TQM() {
  return (
    <div className="tqm-pg">
      <TopButtons />
      <InputCalender />
      <h1 className="company_insight">Company Insights</h1>
      <div className="tqmm">
        {Utils.map((val) => (
          <CardComponent
            Img={val.Img}
            Head={val.Head}
            Percent={val.Percent}
            Gimg={val.Gimg}
            value={val.value}
            btnTxt={val.btnTxt}
            Class={val.class}
            btnClass={val.btnClass}
            mar={val.mar ? val.mar : ""}
          />
        ))}
      </div>
    </div>
  );
}

export default TQM;