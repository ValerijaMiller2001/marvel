import './skeleton.scss';

const Skeleton = () => {
    return (
        <div className="sceleton">
            <div className="sceleton_title">Please select a character to see information</div>
            <div className="sceleton_block">
                <div className="sceleton_circle"></div>
                <div className="sceleton_rectangle_mini"></div>
                <div className="sceleton_rectangle_big"></div>
                <div className="sceleton_rectangle_big"></div>
                <div className="sceleton_rectangle_big"></div>
            </div>
        </div>
    )
}

export default Skeleton;