"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var InfoService = (function () {
    function InfoService() {
        this.services = [
            {
                title: "Custom Graphic and Web Design",
                content: ["The Lavish Craft Design Services are here to make your life easier and your business more beautiful. I offer many services ranging from print to web design to ensure all your business needs are taken care of. When we work together I am more than just a graphic designer, I am someone who cares about you and your goals and am happy to act as a sounding board for your ideas and help guide you through the design process. My aim is to create a design you love that is an effective marketing tool for years. Although I focus on Logo and Brand Development, I love the smaller projects too. Download the Lavish Craft Media Kit to see package details and pricing for the services I offer. On the off chance that you don’t see what you are searching for, get in touch with me and I will let you know whether I can help you."]
            },
            {
                title: "Retainer Design Service",
                content: ["Many of my clients are business owners I have worked with on branding and discover they need design assistance to maintain updated information in their branding style or have small design projects to do and either don’t have the time or the skills necessary to do so. The Retainer Design Service that I offer might be the perfect solution for you if you find yourself with a similar problem. Monthly retainers provided ongoing support at a discounted rate and start with a minimum of a three month contract (the discount rates may be found in my media kit). After discussing your needs to determine if this is the right service for you and that we will work well together I will draw up a contract specifying a certain amount of my time that I will dedicate each month to working on your projects for the appropriate discounted hourly rate. This service does not cover logo and branding design, website design creation, or other similar projects."]
            },
            {
                title: "Consultation Service",
                content: ["Do you already have a graphic designer or a web developer but don’t know how to ask for what you want? Or maybe you’re not even sure what you want to even begin asking for. You are not alone. I have come across this problem many times and if you aren’t in the position to work with me directly I do offer consultation services at an hourly rate."]
            },
            {
                title: "Print Management Service",
                content: ["When I create a design for print I deliver a print ready file for you to take to your local or online printer for those clients who are comfortable with the process and seeing it through. However, I know that many of my clients are busy running their business and don’t want to hunt around for a printer, get project quotes, understand bleed and crop marks, or decide on paper types. For this reason you can elect to have Lavish Craft, Inc take care of the printing process for you and deliver the final products right to your door. For complete details and pricing check out my media kit."]
            }
        ];
        this.faq = [
            {
                title: "Do you develop the websites you design?",
                content: ["I am happy to say that this is a new service that I offer. If you don’t already have a developer you are working with, Lavish Craft can develop your new custom website. I typically create custom wordpress sites so that you will be able to make updates yourself if you choose to."]
            },
            {
                title: "Can you manage my website after it is built?",
                content: ["Managing websites is a good example of when my Retainer Design Service is applicable. If you don’t have the time to keep all the information updated and making sure everything looks and works like it should then you can choose to have Lavish Craft, Inc take care of it for you."]
            },
            {
                title: "How does your design process work?",
                content: ["Please see my process guide to review my typical design process to determine if it works for you."]
            },
            {
                title: "What are my responsibilities?",
                content: ["In order to end up with a custom design you are going to be an integral part of the process. I will be sending you design questionnaires for you to complete that will give me a more in depth knowledge of your specific needs. When we are gathering inspiration for the design style you will be the primary person who gathers images and examples of what you like so that when I begin designing for you I know what direction to go in.", "If we are working on a website design then you are responsible for providing all content and imagery. Imagery is a very important aspect to the end look of your website so we can always discuss what kind of images will work best for your brand."]
            },
            {
                title: "Do you host the websites you design?",
                content: ["No, the domain name and hosting service is your responsibility to purchase. I suggest using bluehost.com or hostgator.com for your website hosting needs. You can also purchase your domain name through these services or you can use GoDaddy.com to purchase your domain name."]
            },
            {
                title: "Is printing included in your packages or design services?",
                content: ["No, I do not include the cost of printing in my design services. However, you can elect to have Lavish Craft, Inc manage the printing process for you. To learn more about this view my media kit for details."]
            },
            {
                title: "What are your billing and payment methods?",
                content: ["I accept payment by most major credit cards or by written checks made out to Lavish Craft, Inc. Many of my projects are billed in two parts, the initial payment and the final payment. However, for larger projects I will breakdown the payments into 4 payments across the span of the project. The initial payment is non-refundable."]
            },
            {
                title: "Do you have office hours?",
                content: ["Yes. In an effort to respect your time and my time I have established office hours. You can reach me Monday through Friday between the hours of 9am and 4pm Mountain Time. I typically respond to emails within 48 hours after receiving them during my established office hours. I do prefer to schedule phone calls, skype, or google hangouts in advance so that I can plan to be available for our conversations."]
            },
            {
                title: "Do you accept rush projects?",
                content: ["When my schedule allows I will accept rush projects for an additional fee. See my process guide for more information."]
            }
        ];
        this.processes = [
            {
                title: "The Consult",
                content: ["I’m thrilled you are considering working with Lavish Craft. Every relationship begins with a first encounter. Once you have filled out and sent in your initial inquiry email via the contact form we will schedule a phone call, skype, or Google Hangout session to discuss your ideas and expectations for this project. Our consultation is also your chance to ask any questions you may have about me. This step is a chance for us to get to know each other and determine if we will make a great team."],
            },
            {
                title: "The Booking",
                content: ["If we hit it off and are ready to move forward with the project I will put together a formal proposal as well as a contract of service and send it your way. If everything meets your approval please sign, scan and send the forms back to me (keeping copies for yourself). At this point I will invoice you for your first non-refundable payment on the project.", "Once the legalities are out of the way I will send you some questionnaires to fill out to give me a more detailed picture of your project so that I know as much as I can about your specific needs."]
            },
            {
                title: "The Inspirations",
                content: ["Getting an inspiration board together is a vital step in the process for any design because it lets me know what style and direction the visuals should take. This will require a bit of homework on your end in the form of gathering visuals. The easiest way to do this is to create a private board on Pinterest and share it. We can both collaborate and share ideas on this board. Feel free to also send photos of yourself, your office, or any inspirations that you come across (even if it is just a sentence or two of your thoughts. I will use these inspirations to find a common theme and create an inspiration board that will give the overall feel of the end product."]
            },
            {
                title: "The Creation",
                content: ["Once the inspiration board is finalized we get to start the most exciting step, creating your own unique design. In this phase you will receive the initial designs and have an opportunity for up to 3 rounds of revisions so that we can fine tune it until you are in love."]
            },
            {
                title: "The Finishing Touches",
                content: ["It’s time to get the final files for your project. If we are working on a branding package I will put everything together into a style guide and deliver it with the logo(s) before we continue onto the roll out. Once everything for the project is approved and the next or final payment made (unless we are doing a payment plan) I will deliver the final files to you via google drive. "]
            },
            {
                title: "The Roll Out",
                content: ["If we are working on a larger project like a brand development that includes marketing materials including print and/or website design then we get to keep on working together. I will take your newly designed final branding and work on creating a seamless new look for everything per your approved formal proposal."]
            },
            {
                title: "The Deliverables",
                content: ["Print Projects", "Once you have approved the designs I will provide you with print ready files. You can also choose to have Lavish Craft, Inc take care of the printing for an additional fee.", "Website Projects", "The website design will begin once we have finalized your branding guidelines and all content has been submitted. Once the website designs are approved I will begin the development to get your website functional. Any additional changes at this point will be billed separately unless otherwise discussed."]
            },
            {
                title: "The Fine Print",
                content: ["Rush Fees", "I am happy to take on rush projects when my schedule allows. The project will have an added rush fee to it, the details for which will be covered in the proposal. If we are working on a project and the time frame must be moved up it may be subject to a rush fee as well.", "Cancellations", "Good communication is key during the design process. If you (the client) or designer becomes ill or has an emergency during the project a small delay of up to 3 weeks is acceptable. If communication is broken by you (meaning no response to emails or phone calls) for 45 days or longer then the project will be considered dropped and removed from the schedule. There will be no refunds and the files will not be delivered.", "Font Licenses", "You (the client) are responsible for purchasing all font licenses not created by Lavish Craft, Inc or offered for free.", "Client Responsibilities", "You (the client) are responsible for providing materials (questionnaires, content, imagery, forms, etc.)  within 1 week of agreed upon due date. You are also responsible for purchasing font licenses, website domain and hosting fees, and any printing fees incurred. You can elect to have Lavish Craft, Inc take on some of these purchases to be reimbursed for an additional fee on the final invoice.", "Time Frame", "Each project is unique and the time frame can vary. Your schedule and availability will play a factor. A branding project typically takes between 5 to 8 weeks. We can discuss the expected time frame during your free consultation call and I will provide you with a more detailed schedule along with the project proposal."]
            }
        ];
    }
    InfoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], InfoService);
    return InfoService;
}());
exports.InfoService = InfoService;
//# sourceMappingURL=info.service.js.map