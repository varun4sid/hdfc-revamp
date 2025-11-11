import { useEffect } from "react";
import logo from "@/assets/superfd-logo.png";
import "./Footer.css";

function Footer() {
    useEffect(() => {
        const categories = document.querySelectorAll(".category");

        categories.forEach((category) => {
            const anchors = category.querySelectorAll("a");
            anchors.forEach((anchor, index) => {
                if (index < anchors.length - 1) {
                    const divider = document.createElement("span");
                    divider.innerHTML = " | ";
                    anchor.insertAdjacentElement("afterend", divider);
                }
            });
        });
    }, []);

    return (
        <div className="footer">
            <hr />
            <img src={logo} alt="superfd-logo" id="logo" />
            <div className="primary-links">
                <a href="https://www.superfd.in/about">About Us</a>
                <a href="https://www.superfd.in/support">Support</a>
                <a href="https://www.superfd.in/privacy-policy">
                    Privacy Policy
                </a>
            </div>
            <hr />
            <div className="category">
                <strong>Fixed Deposit : </strong>
                <a href="https://www.superfd.in/fd/cmc8t2dur0015c8w0mfg0trca">
                    Suryoday SF Bank
                </a>
                <a href="https://www.superfd.in/fd/cmc8w1is3001lc8w0uqrdu542">
                    Unity SF Bank
                </a>
                <a href="https://www.superfd.in/fd/cmdrih74z0002kk055813y9nu">
                    Utkarsh SF Bank
                </a>
                <a href="https://www.superfd.in/fd/cmc8ytv5l001w10ffo5j0zvd9">
                    Shriram Finance
                </a>
                <a href="https://www.superfd.in/fd/cmc90hhex002qc8w0u0ws85fc">
                    Bajaj Finance
                </a>
                <a href="https://www.superfd.in/fd/cmc9208ou003c10fftt0v3vjw">
                    Mahindra Finance
                </a>
            </div>
            <div className="category">
                <strong>FD Rates : </strong>
                <a href="https://www.superfd.in/fixed-deposit/sbi-bank-fd-rates">
                    SBI FD Interest Rates
                </a>
                <a href="https://www.superfd.in/fixed-deposit/hdfc-bank-fd-rates">
                    HDFC FD Interest Rates
                </a>
                <a href="https://www.superfd.in/fixed-deposit/icici-bank-fd-rates">
                    ICICI FD Interest Rates
                </a>
                <a href="https://www.superfd.in/fixed-deposit/axis-bank-fd-rates">
                    Axis FD Interest Rates
                </a>
                <a href="https://www.superfd.in/fixed-deposit/kotak-bank-fd-rates">
                    Kotak FD Interest Rates
                </a>
                <a href="https://www.superfd.in/fixed-deposit/indusind-bank-fd-rates">
                    IndusInd FD Interest Rates
                </a>
                <a href="https://www.superfd.in/fixed-deposit/bank_of_baroda-bank-fd-rates">
                    Bank of Baroda FD Interest Rates
                </a>
                <a href="https://www.superfd.in/fixed-deposit/canara-bank-fd-rates">
                    Canara FD Interest Rates
                </a>
                <a href="https://www.superfd.in/fixed-deposit/pnb-bank-fd-rates">
                    PNB FD Interest Rates
                </a>
                <a href="https://www.superfd.in/fixed-deposit/idbi-bank-fd-rates">
                    IDBI FD Interest Rates
                </a>
            </div>
            <div className="category">
                <strong>Blogs : </strong>
                <a href="https://www.superfd.in/blog/fds-are-set-to-be-safer-than-ever">
                    DICGC Insurance for FDs
                </a>
                <a href="https://www.superfd.in/blog/tired-of-hearing-about-the-inr12l-tax-exemption">
                    ₹12L Tax Exemption
                </a>
                <a href="https://www.superfd.in/blog/are-fd-rates-finally-set-to-drop">
                    Repo Rate Changes
                </a>
                <a href="https://www.superfd.in/blog/small-finance-banks-are-on-the-rise">
                    Rising Small Finance Banks
                </a>
                <a href="https://www.superfd.in/blog/india-still-loves-fds">
                    Fixed Deposits India
                </a>
                <a href="https://www.superfd.in/blog/indian-banks-dominate-the-long-term-fd-market">
                    Long vs Short Term FDs
                </a>
            </div>
        </div>
    );
}

export default Footer;
