
function Briefing(props) {
    return (
        <div className="briefing">
            <p class="briefing__welcome">{props.preface}</p>
            <h4 class="briefing__name">{props.name}</h4>
            <p class="briefing__bio">{props.bio}</p>
        </div>
    );
}
export default Briefing