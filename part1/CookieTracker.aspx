<%@ Page Language="C#" AutoEventWireup="true" CodeFile="CookieTracker.aspx.cs" Inherits="CookieTracker" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Cookie Tracker</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700"/>
    <link rel="stylesheet" href="../shared/shared.css" type="text/css" />

    <%--https://stackoverflow.com/questions/1091372/getting-the-clients-timezone-in-javascript/--%>
    <script type="text/javascript">
        function GetClientTimeZone() {
            var offset = new Date().getTimezoneOffset() / 60; /*minutes to hour*/
            var timeZone = "UTC " + new Date().toUTCString();
            timeZone += (offset < 0) ? " (+" : " (-";
            timeZone += offset + " hrs)";
            document.getElementById("timeZone").innerHTML = timeZone;
        }
    </script>
</head>
<body onload="GetClientTimeZone()">
    <div>
        <ul class="hmul">
                <li class="hmli"><a href="../tma3a.htm">Home</a></li>
                <li class="hmli"><a class="active" href="./CookieTracker.aspx">Part 1</a></li>
                <li class="hmli"><a href="../part2/Slideshow.aspx">Part 2</a></li>
                <li class="hmli"><a href="../part3/CompStore.aspx">Part 3</a></li>
                <li class="hmli"><a href="../part4/CompStore.aspx">Part 4</a></li>
            </ul>
        <div class="container-fluid text-center mt-4">
            <div class="row content">
                <div height="100%" class="col-sm-2"></div>

                <div class="col-sm-8 text-center">
                    <form runat="server">
                        <div>
                            <h2 id="partTitle">Presistent Cookie Tracker</h2>
                            <hr />
                            <h5>Counter: <asp:Label runat="server" id="nbCookies">placeholder for visit counts</asp:Label></h5><br/>
                            <h5><asp:Label runat="server" id="IpAddy">placeholder for visit counts</asp:Label></h5><br/>
                            <h5><asp:Label runat="server" id="timeZone"></asp:Label></h5><br/>
                            <button runat="server" class="btn btn-primary my-2" onServerClick="Refreshbtn">Increment Counter</button><br />
                            <button runat="server" class="btn btn-danger" onServerClick="Resetbtn">Reset Counter</button>
                            <hr />
                            <asp:Image ID="CookieGIF" runat="server" 
                                ImageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lifewire.com%2Fthmb%2FdLKn09hhNtKRgiv3hoM2VqpDD_Q%3D%2F768x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fspinning-cookie-5a66336ff5e6650037fc4717.gif&f=1&nofb=1"
                                Width="250" Height="150"/>
                        </div>
                    </form>
                </div>
                <div class="col-sm-2"></div>
            </div>
        </div>
    </div>
</body>
</html>
