const Test = () => {
    const a = 2;
    return (
        <>
        <div id="main-content">
            <div className='container-fluid'>
                <input type="radio" name="test" checked={a === 1?true:false} /> A
                <input type="radio" name="test" checked={a === 2?true:false} /> B
                
            </div>
        </div>
        </>
    )
}

export default Test;