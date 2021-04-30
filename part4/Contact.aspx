<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Contact.aspx.cs" Inherits="Contact" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Rainbow Globe Computer Store</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="../shared/img/logo.png" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700"/>
    <link rel="stylesheet" href="../shared/shared.css" type="text/css" />
    <script type="text/javascript" src="../shared/script.js"></script>
</head>
<body>
    <div>
        <ul class="hmul">
            <li class="hmli"><a href="../tma3a.htm">Home</a></li>
            <li class="hmli"><a href="../part1/CookieTracker.aspx">Part 1</a></li>
            <li class="hmli"><a href="../part2/Slideshow.aspx">Part 2</a></li>
            <li class="hmli"><a href="../part3/CompStore.aspx">Part 3</a></li>
            <li class="hmli"><a class="active" href="./CompStore.aspx">Part 4</a></li>
        </ul>
        <nav class="navigation bg-warning">
            <div id="mySidenav" class="sidenav bg-warning">
                <a href="javascript:void(0)" class="closebtn" onClick="closeSideNav()">&times;</a>
                <a href="./CompStore.aspx"><h5>Home</h5></a>
                <a href="./Contact.aspx"><h5>Contact</h5></a>
                <a href="./Feedback.aspx"><h5>Feedback</h5></a>
                <div class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="./CompStore.aspx"><h5>Products</h5></a>
                    <ul class="dropdown-menu bg-warning border-0">
                      <li><a href="./ProductLaptops.aspx"><h5>Laptops</h5></a></li>
                      <li><a href="./ProductParts.aspx"><h5>Computer Parts</h5></a></li>
                    </ul>
                </div>
            </div>
            <button class="btn btn-warning text-dark font-weight-bold" onClick="openSideNav()">&#9776; Side Menu</button>
            <h4 class="navigation-logo">
                Rainbow Globe
                <a href="./CompStore.aspx" style="text-decoration:none;">
                    <img width="40px" height="40px" class="navbrand" src="../shared/img/logo.png" alt="logo" />
                </a>
                Computer Store
            </h4>
        </nav>
        <div class="container-fluid text-center mt-4">
            <form runat="server">
            <div class="row content">
                <div height="100%" class="col-sm-2">
                    <hr />
                    <h6 class="mt-3">Store Reviews</h6>
                    <hr />
                    <div class="card text-light bg-dark text-left pt-3 pb-1 px-3">
                        <p>Customer service at this place is outstanding and helpful. From the door welcoming lovely smile to the checkout :)
                            <br />
                            <span class="font-italic font-weight-bold">- Ahmed Elnagar</span></p>
                    </div>
                    <hr />
                    <div class="card text-dark bg-warning text-left pt-3 pb-1 px-3">
                        <p>They actually pick up the phone and provide service. I've always loved the pricing, but some stores are not as good as this one.
                            <br />
                            <span class="font-italic font-weight-bold">- Alfanso Araujo</span></p>
                    </div>
                    <hr />
                    <div class="card text-light bg-dark text-left pt-3 pb-1 px-3">
                        <p>This is my favourite place to shop for electronics. Great prices, and great customer service.
                            <br />
                            <span class="font-italic font-weight-bold">- Romero Perez</span></p>
                    </div>
                    <hr />
                    <div class="card text-dark bg-warning text-left pt-3 pb-1 px-3">
                        <p>Amazing customer service from Josh. Very friendly and informative. Made switching phone plans easy.
                            <br />
                            <span class="font-italic font-weight-bold">- Devin Tyrrell</span></p>
                    </div>
                    <hr />
                    <div class="card text-light bg-dark text-left pt-3 pb-1 px-3">
                        <p>One of the best stores I’ve been to. Staff very helpful!
                            <br />
                            <span class="font-italic font-weight-bold">- Ryan Howkins</span></p>
                    </div>
                    <hr />
                </div>
                <div class="col-sm-8 text-center">
                    <div class="text-left">
                        <h1>Contacts</h1>
                        <hr />
                        <h3>Our Geek Squad</h3>
                        <hr />
                        <div class="card bg-secondary text-light p-4 font-weight-bold">
                            <p>Elon Musk - Head of IT</p>
                            <p>Email: <a href="mailto: elonmusk@gmail.com">elonmusk@gmail.com</a></p>
                            <p>Phone Number: (123) 456-1234</p>
                        </div>
                        <hr />
                        <div class="card bg-secondary text-light p-4 font-weight-bold">
                            <p>Steve Jobs - Lead Technician</p>
                            <p>Email: <a href="mailto: stevejobs@gmail.com">stevejobs@gmail.com</a></p>
                            <p>Phone Number: (123) 789-1234</p>
                        </div>
                        <hr />
                        <div class="card bg-secondary text-light p-4 font-weight-bold">
                            <p>Bill Gates - Microsoft Lead</p>
                            <p>Email: <a href="mailto: billgates@gmail.com">billgates@gmail.com</a></p>
                            <p>Phone Number: (123) 197-1234</p>
                        </div>
                        <hr />
                        <div class="card bg-secondary text-light p-4 font-weight-bold">
                            <p>Jeff Bezos - Head of IT Cybersecurity & Privacy</p>
                            <p>Email: <a href="mailto: jeffbezos@gmail.com">jeffbezos@gmail.com</a></p>
                            <p>Phone Number: (123) 666-1234</p>
                        </div>
                        <hr />
                    </div>
                </div>
                <div class="col-sm-2">
                    <hr />
                    <asp:Button runat="server" ID="loginSignUp" PostBackUrl="Login.aspx" CssClass="btn btn-danger mb-2" Text="Welcome"/>
                    <br />
                    <a class="btn btn-primary" href="./Cart.aspx">Cart 🛒</a>
                    <hr />
                    <h6 class="mt-3">Who We Support</h6>
                    <hr />
                    <div class="card text-light bg-dark pt-3 pb-1 px-3">
                        <p class="font-weight-bold font-italic text-center">CanadaHelps</p>
                    </div>
                    <hr />
                    <div class="card text-dark bg-warning pt-3 pb-1 px-3"">
                        <p class="font-weight-bold font-italic text-center">Food Banks Canada</p>
                    </div>
                    <hr />
                    <div class="card text-light bg-dark pt-3 pb-1 px-3">
                        <p class="font-weight-bold font-italic text-center">Youth Without Shelter</p>
                    </div>
                    <hr />
                    <div class="card text-dark bg-warning pt-3 pb-1 px-3"">
                        <p class="font-weight-bold font-italic text-center">WE Charity</p>
                    </div>
                    <hr />
                    <div class="card text-light bg-dark pt-3 pb-1 px-3">
                        <p class="font-weight-bold font-italic text-center">Indspire</p>
                    </div>
                    <hr />
                    <div class="card text-dark bg-warning pt-3 pb-1 px-3"">
                        <p class="font-weight-bold font-italic text-center">Sick Kids</p>
                    </div>
                    <hr />
                    <div class="card text-light bg-dark pt-3 pb-1 px-3">
                        <p class="font-weight-bold font-italic text-center">Alberta Conservation Association</p>
                    </div>
                    <hr />
                    <div class="card text-dark bg-warning pt-3 pb-1 px-3"">
                        <p class="font-weight-bold font-italic text-center">Canadian Foodgrains Bank</p>
                    </div>
                    <hr />
                    <div class="card text-light bg-dark pt-3 pb-1 px-3">
                        <p class="font-weight-bold font-italic text-center">Hope Air</p>
                    </div>
                    <hr />
                    <div class="card text-dark bg-warning pt-3 pb-1 px-3"">
                        <p class="font-weight-bold font-italic text-center">Canadian Red Cross</p>
                    </div>
                    <hr />
                </div>
            </div>
            </form>
        </div>
    </div>
</body>
</html>
