namespace MyWebsite.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _3 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Replies", "CanNotRate", c => c.Boolean(nullable: false));
            DropColumn("dbo.Replies", "CanRate");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Replies", "CanRate", c => c.Boolean(nullable: false));
            DropColumn("dbo.Replies", "CanNotRate");
        }
    }
}
