import PropTypes from 'prop-types';

const Preloader = ({ show }) => {
    return show ? <div className='preloader-container'>
        <div className="pswp__preloader__icn">
            <div className="pswp__preloader__cut">
                <div className="pswp__preloader__donut"></div>
            </div>
        </div>
    </div> : null
}

Preloader.propTypes = {
    show: PropTypes.bool.isRequired
}

export default Preloader;