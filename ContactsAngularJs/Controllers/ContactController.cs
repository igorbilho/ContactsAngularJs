using ContactsAngularJs.Helpers;
using ContactsAngularJs.Models;
using System.Web.Mvc;

namespace ContactsAngularJs.Controllers
{
    public class ContactController : JsonController
    {
        private ContactContext ContactsDB = new ContactContext();

        public ActionResult GetContacts()
        {
            var Contacts = ContactsDB.Contacts;
            return Json(Contacts, JsonRequestBehavior.AllowGet);
        }

    }
}