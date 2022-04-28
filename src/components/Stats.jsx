import statsData from '../api/statsItems.js';

function Stats() {

    const statsItems = statsData.map((statsItem) => {
        return (
            <div className="stats__item">
                <h3 className="stats__number">{statsItem.number} +</h3>
                <p class="stats__category">{statsItem.category}</p>
            </div>
        )
    });
    
    return (
        <div className="stats">
            {statsItems}
        </div >
    );
}
export default Stats