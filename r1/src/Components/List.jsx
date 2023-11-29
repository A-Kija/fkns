export default function List({ colors }) {
    return (
        <div className="card mt-5">
            <div className="card-body">
                <h5 className="card-title">Colors</h5>
                <ul className="list-group">
                    {
                        colors === null && <li className="list-group-item">Loading...</li>
                    }
                    {
                        colors !== null && !colors.length && <li className="list-group-item">No colors yet</li>
                    }
                    {
                        colors !== null && colors.length !== 0 && colors.map(color => (
                            <li key={color.id} className="list-group-item">
                                <div className="ball-bin">
                                    <div className="color-ball" style={
                                        {
                                            backgroundColor: color.color,
                                            width: color.size + 'px',
                                            height: color.size + 'px'
                                        }
                                    }>
                                    </div>
                                    <button className="btn btn-danger float-end">REMOVE</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}