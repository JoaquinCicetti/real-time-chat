import React from 'react';
import { MorphingIcon } from '../';
import './ToggleButton.scss';

interface Props {
    checked: boolean;
    toggle: () => void;
    checkedIcon: string;
    uncheckedIcon: string;
    big?: boolean;
}
const ToggleButton: React.FC<Props> = ({ checked, toggle, checkedIcon, uncheckedIcon, big }) => {
    const handleChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        toggle();
    };
    const size = big ? 32 : 18;
    return (
        <button onClick={handleChange} className={`toggleButton ${big ? 'big' : ''}`}>
            <MorphingIcon width={size} height={size} icon={checked ? checkedIcon : uncheckedIcon} />
        </button>
    );
};

export default ToggleButton;
