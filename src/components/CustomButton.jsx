import './CustomButton.scss'

const CustomButton = ({ onClick, children }) => {
    <button className="custom-button-container" onClick={onClick}>
        {children}
    </button>
}

export default CustomButton; 