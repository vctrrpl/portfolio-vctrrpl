import PropTypes from 'prop-types';

export const SmoothScroll = ({ targetId, children, onClick, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

SmoothScroll.propTypes = {
  targetId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
