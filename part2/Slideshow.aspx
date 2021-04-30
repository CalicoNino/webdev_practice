<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Slideshow.aspx.cs" Inherits="Slideshow" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    
    <title>Slideshow</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700"/>
    <link rel="stylesheet" href="../shared/shared.css" type="text/css" />
</head>
<body>
    <div>
        <ul class="hmul">
                <li class="hmli"><a href="../tma3a.htm">Home</a></li>
                <li class="hmli"><a href="../part1/CookieTracker.aspx">Part 1</a></li>
                <li class="hmli"><a class="active" href="./Slideshow.aspx">Part 2</a></li>
                <li class="hmli"><a href="../part3/CompStore.aspx">Part 3</a></li>
                <li class="hmli"><a href="../part4/CompStore.aspx">Part 4</a></li>
            </ul>
        <div class="container-fluid text-center mt-4">
            <div class="row content">
                <div height="100%" class="col-sm-2"></div>

                <div class="col-sm-8 text-center">
                    <form runat="server">
                        <div>
                            <h1>My Book Collection</h1>
                            <hr />
                            <asp:ImageButton ID="PrevBtn" CssClass="btn btn-primary mx-5" Width="70" Height="70" runat="server" ImageUrl="../shared/img/prev.svg" OnClick="Prev" />
                            <asp:ImageButton ID="ShuffleBtn" CssClass="btn btn-secondary mx-2" Width="70" Height="70" runat="server" ImageUrl="../shared/img/shuffle.svg" OnClick="Shuffle" />
                            <asp:ImageButton ID="NextBtn" CssClass="btn btn-primary mx-5" Width="70" Height="70" runat="server" ImageUrl="../shared/img/next.svg" OnClick="Next" />
                            <hr />
                            <asp:ImageButton ID="PlayBtn" CssClass="btn btn-success mx-2" Width="70" Height="70" runat="server" ImageUrl="../shared/img/play.svg" OnClick="Play" />
                            <asp:ImageButton ID="StopBtn" CssClass="btn btn-danger mx-2" Width="70" Height="70" runat="server" ImageUrl="../shared/img/stop.svg" OnClick="Stop" />
                <%--            http://ajax.net-tutorials.com/controls/timer-control/--%>
                            <hr />
                            <asp:ScriptManager runat="server"></asp:ScriptManager>
                            <asp:UpdatePanel runat="server" style="text-align: center">
                                <ContentTemplate>
                                    <asp:Timer runat="server" ID="UpdateTimer" Interval="5000" OnTick="PhotoTick"></asp:Timer>
                                    <asp:Label runat="server" ID="Caption" CssClass="h3 font-weight-bold mb-3" Text="1984 by George Orwell"></asp:Label><br />
                                    <asp:Image ID="BookSlideshow" CssClass="border rounded my-4"  Width="500" Height="500" runat="server" ImageUrl="../shared/img/books/1984.png" />
                <%--                    https://stackoverflow.com/questions/30204557/timer-not-incrementing-a-variable-in-timer-tick--%>
                                    <asp:HiddenField ID="hdnShuffleOn" runat="server" Value="false"></asp:HiddenField>
                                </ContentTemplate>
                            </asp:UpdatePanel>
                        </div>
                    </form>
                </div>
                <div class="col-sm-2"></div>
            </div>
        </div>
    </div>
</body>
</html>
