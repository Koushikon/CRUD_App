using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Web.Data;
using Web.Models;

namespace Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationDBContext _context;

        public HomeController(ApplicationDBContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            Employee empObj = new()
            {
                Employees = _context.Employee.ToList()
            };

            return View(empObj);
        }

        [HttpPost]
        public IActionResult Upsert(Employee model)
        {
            if (ModelState.IsValid)
            {
                if (model.ID <= 0)
                {
                    _context.Employee.Add(model);
                }
                else
                {
                    _context.Employee.Update(model);
                }
                _context.SaveChanges();
            }

            return RedirectToAction("Index");
        }


        [HttpPost]
        public IActionResult Delete(Employee model)
        {
            var employeeData = _context.Employee.Find(model.ID);

            if (employeeData != null)
            {
                _context.Employee.Remove(employeeData);
            }
            _context.SaveChanges();

            return RedirectToAction("Index");
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
