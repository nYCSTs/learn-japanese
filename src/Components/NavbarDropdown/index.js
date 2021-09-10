import { Button, P, Dropdown } from './Style';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useState, useRef, useEffect } from 'react';

export default function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}

export const NavbarDropdown = ({ text, children }) => {
  const [showDropdown, setShowDropdown] = useState();
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);

  const renderDropdown = () => {
    return (
      <Dropdown>
        {children}
      </Dropdown>
    )
  }

  useEffect(() => {
    if (!isComponentVisible) {
      setIsComponentVisible(true);
      setShowDropdown(false);
    }
  }, [isComponentVisible]);

  return (
    <div style={{ marginRight: '12px' }} ref={ref}>
      <Button onClick={() => setShowDropdown(!showDropdown)}>
        <P>{text}<AiOutlineArrowDown /></P>
        {isComponentVisible && showDropdown && (renderDropdown())}
      </Button>
    </div>
  );
}