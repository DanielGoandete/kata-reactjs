

const Image = ({pathName, altText}) => {
    return (
        <div class="col">
            <img src={pathName} alt={altText}  width="90%" height="100%" />        
        </div>
    )
}
export default Image