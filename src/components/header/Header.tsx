import './Header.scss';

export const Header: React.FC = () => {
    return <header className="header">
        <span className="header__date">Date: {new Date().toDateString()}</span>
        <div className="header__cash-content sum">
            <span className="sum__spend">Spend: 200</span>
            <span className="sum__balance">Balance: 900</span>
        </div>
    </header>
}