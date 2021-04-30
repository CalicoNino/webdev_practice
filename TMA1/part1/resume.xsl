<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>resume</title>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            </head>
            <body>
                <h1 class="text-center font-weight-bold font-italic">
                    <xsl:value-of select="resume/introduction/name"/>
                </h1>
                <hr/>

                <table width="100%">
                    <tr bgcolor="#9acd32">
                        <th class="text-center">
                            Address
                        </th>
                        <th class="text-center">
                            Phone Number
                        </th>
                        <th class="text-center">
                            Email
                        </th>
                        <th class="text-center">
                            LinkedIn
                        </th>
                        <th class="text-center">
                            Github
                        </th>
                        <th class="text-center">
                            Personal Website
                        </th>
                    </tr>
                    <tr>
                        <td class="text-center">
                            <xsl:value-of select="resume/introduction/address"/>
                        </td>
                        <td class="text-center">
                            <xsl:value-of select="resume/introduction/contactno"/>
                        </td>
                        <td class="text-center">
                            <xsl:value-of select="resume/introduction/email"/>
                        </td>
                        <td class="text-center">
                            <xsl:value-of select="resume/introduction/linkedin"/>
                        </td>
                        <td class="text-center">
                            <xsl:value-of select="resume/introduction/github"/>
                        </td>
                        <td class="text-center">
                            <xsl:value-of select="resume/introduction/website"/>
                        </td>
                    </tr>
                </table>
                <hr/>
                <h3> Work Experience </h3>

                <xsl:for-each select="resume/work/position">

                    <table width="100%">
                        <tr bgcolor="#9acd32">
                            <td width="50%">
                                <xsl:value-of select="title"/>
                            </td>
                            <td width="35%">
                                <xsl:value-of select="company"/>
                            </td>
                            <td width="15%">
                                <xsl:value-of select="date"/>
                            </td>
                        </tr>
                    </table>

                    <ul>
                        <li>
                            <xsl:value-of select="description/task1"/>
                        </li>
                        <li>
                            <xsl:value-of select="description/task2"/>
                        </li>
                        <li>
                            <xsl:value-of select="description/task3"/>
                        </li>
                    </ul>

                    <br/>
                </xsl:for-each>

                <hr/>
                <h3> Skills </h3>
                <table width="100%">
                    <tr>
                        <td width="200px" bgcolor="#9acd32">
                            Programming Languages:
                        </td>
                        <td>
                            <xsl:value-of select="resume/skills/programming"/>
                        </td>
                    </tr>
                    <tr>
                        <td width="200px" bgcolor="#9acd32">
                            Frameworks Used:
                        </td>
                        <td>
                            <xsl:value-of select="resume/skills/framework"/>
                        </td>
                    </tr>
                    <tr>
                        <td width="200px" bgcolor="#9acd32">
                            Technologies Used:
                        </td>
                        <td>
                            <xsl:value-of select="resume/skills/technologies"/>
                        </td>
                    </tr>
                    <tr>
                        <td width="200px" bgcolor="#9acd32">
                            Security Tools Used:
                        </td>
                        <td>
                            <xsl:value-of select="resume/skills/sectools"/>
                        </td>
                    </tr>
                    <tr>
                        <td width="200px" bgcolor="#9acd32">
                            Interests:
                        </td>
                        <td>
                            <xsl:value-of select="resume/skills/interests"/>
                        </td>
                    </tr>
                </table>

                <hr/>
                <h3> Projects </h3>
                <xsl:for-each select="resume/projects/project">
                    <table width="100%">
                        <tr>
                            <th bgcolor="#9acd32">
                                <h4 >
                                    <xsl:value-of select="name"/>
                                </h4>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <ul>
                                    <li>
                                        <xsl:value-of select="language"/>
                                    </li>
                                    <li>
                                        <xsl:value-of select="content"/>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </xsl:for-each>

                <hr/>
                <h3> Education </h3>
                <table>
                    <tr bgcolor="#9acd32">
                        <th width="90%">
                            <h4>
                                <xsl:value-of select="resume/education/name"/>
                            </h4>
                        </th>
                        <th>
                            <xsl:value-of select="resume/education/date"/>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <ul>
                                <li>
                                    <xsl:value-of select="resume/education/degree"/>
                                </li>
                                <li>
                                    <xsl:value-of select="resume/education/minor"/>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>