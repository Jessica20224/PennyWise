//LandingPage.js
import React from "react";

function LandingPage() {
    return (
        <div>
            <header class="header">
                <div class="container">
                    <h1 class="logo">PennyWise</h1>
                    <nav class="navbar">
                        <ul>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#benefits">Benefits</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#download" class="btn-primary">Download</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main class="main-content">
                <section class="hero">
                    <div class="container">
                        <h2>Take Control of Your Finances</h2>
                        <p>Track your expenses, set financial goals, and achieve your dreams with ease.</p>
                        <a href="#download" class="btn-primary">Get Started</a>
                    </div>
                </section>

                <section id="features" class="features">
                    <div class="container">
                        <h2>Key Features</h2>
                        <div class="feature-grid">
                            <div class="feature-item">
                                <h3>Expense Tracking</h3>
                                <p>Keep a detailed record of your spending habits.</p>
                            </div>
                            <div class="feature-item">
                                <h3>Budget Alerts</h3>
                                <p>Get notified when you approach your budget limit.</p>
                            </div>
                            <div class="feature-item">
                                <h3>Data Visualization</h3>
                                <p>Visualize your financial health with graphs and charts.</p>
                            </div>
                            <div class="feature-item">
                                <h3>Goal Setting</h3>
                                <p>Define and track your savings goals easily.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="benefits" class="benefits">
                    <div class="container">
                        <h2>Why Choose Us?</h2>
                        <p>Our app is designed to empower you with financial awareness and control.</p>
                        <ul>
                            <li>Simple and user-friendly interface</li>
                            <li>Secure data handling</li>
                            <li>Available on mobile and desktop</li>
                        </ul>
                    </div>
                </section>

                <section id="faq" class="faq">
                    <div class="container">
                        <h2>Frequently Asked Questions</h2>
                        <p>Have questions? We've got answers.</p>
                        <ul>
                            <li>How do I set a budget?</li>
                            <li>Is my data secure?</li>
                            <li>Can I connect my bank account?</li>
                        </ul>
                    </div>
                </section>

                <section id="download" class="download">
                    <div class="container">
                        <h2>Download the App</h2>
                        <p>Available on Google Play and the App Store.</p>
                        <div class="buttons">
                            <a href="#" class="btn-secondary">Google Play</a>
                            <a href="#" class="btn-secondary">App Store</a>
                        </div>
                    </div>
                </section>
            </main>

            <footer class="footer">
                <div class="container">
                    <p>&copy; 2024 Budget Tracker. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage