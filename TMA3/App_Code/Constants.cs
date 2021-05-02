using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Constants
/// </summary>
public class Constants
{
    public static string LOGIN_COOKIE = "LoginCookie";
    public static string LOGIN_USER = "LoginUser";

    public static string COMPUTER_COOKIE = "CompCookie";
    public static string COMPUTER_NAME = "Computer";

    public static string CART_COOKIE = "CartCookie";
    public static string CART_ITEMS = "CartItems";

    public enum Computer
    {
        Macbook, Lenovo, Hp
    }

    public enum ComponentType
    {
        Computer, Display,Drive,Ram, Cpu, Os
    }

    public static List<CartItem> CartItems = new List<CartItem>();
    public static List<CartItem> Part4CartItems = new List<CartItem>();


    public static Dictionary<Computer, double> ComputerPrices = new Dictionary<Computer, double>
    {
        {Computer.Macbook, 700},
        {Computer.Lenovo, 550},
        {Computer.Hp, 500}
    };

    public static Dictionary<Computer, string> ComputerImages = new Dictionary<Computer, string>
    {
        {Computer.Macbook,"../shared/img/computers/macbook.png"},
        {Computer.Lenovo,"../shared/img/computers/lenovo.png"},
        {Computer.Hp,"../shared/img/computers/hp.png"}
    };

    public static Dictionary<Computer, string> ComputerDisplayName = new Dictionary<Computer, string>
    {
        {Computer.Macbook,"Macbook Pro"},
        {Computer.Lenovo,"Lenovo"},
        {Computer.Hp,"HP Notebook"}
    };
};