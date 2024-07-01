import { ReactNode } from 'react';
import './popup.scss';

interface PopupProps {
    trigger: boolean;
    setTrigger: (value: boolean) => void;
    children: ReactNode;
}

function Popup({ trigger, setTrigger, children }: PopupProps) {
    return trigger ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => setTrigger(false)}>X</button>
                {children}
            </div>
        </div>
    ) : null;
}

export default Popup;
