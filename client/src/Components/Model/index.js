import STLViewer from 'stl-viewer'

let url = './revision2.0.stl'
let light = [0,2,0,2]


export function Model() {
    return(
        <div className='model_wrapper'>
            <div className='controls'>
                <h4>Controls<hr className='smol'/></h4>
                <ol>Rotate: Hold Left Click and Move Mouse</ol>
                <ol>Move: Hold Right Click and Move Mouse</ol>
                <ol>Zoom: Hold Middle Mouse Button and Move Mouse or just scroll using your scroll wheel</ol>
            </div>
            <div className='thing'>
                <STLViewer
                    file={url}
                    width={1795}
                    height={900}
                    model={url}
                    modelColor='grey'
                    backgroundColor='white'
                    rotate={false}
                    orbitControls={true}
                    lights={light}
                    className='test'
                />
            </div>
        </div>
    )
}