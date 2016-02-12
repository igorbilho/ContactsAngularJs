using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ContactsAngularJs.Models
{
    public partial class ContactContext : DbContext
    {
        public virtual DbSet<Contact> Contacts { get; set; }
    }
}