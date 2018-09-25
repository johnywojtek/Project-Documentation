import React, { Component } from "react";
import "../../styles/main.scss";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

// class NavSearch extends Component {
//     render() {
//         return (
//             <form className="form-inline my-2 my-lg-0">
//                 <input
//                     className="form-control mr-sm-3"
//                     type="search"
//                     placeholder="Search"
//                     aria-label="Search"
//                 />
//                 <button
//                     className="btn btn-outline-success my-2 my-sm-0"
//                     type="submit"
//                 >
//                     Search
//                 </button>
//             </form>
//         );
//     }
// }

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="header">
                <Navbar color="white" expand="md">
                    {/* <NavbarBrand href="/">
                        <NavSearch />
                    </NavbarBrand> */}
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/johnywojtek">
                                    GitHub
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Kontakt
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        johnywojtek@gmail.com
                                    </DropdownItem>
                                    <DropdownItem>
                                        Tel: 728 326 928
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
