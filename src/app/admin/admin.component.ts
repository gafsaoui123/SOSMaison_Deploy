import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // Metrics
  connectedToday = 0;
  totalUsers = 0;
  totalOrders = 18800;
  totalSales = 35078;
  searchQuery = '';
  
  // Charts
  lineChartData: ChartData<'line'> = {
    labels: [],
    datasets: [{
      label: 'Connections',
      data: [],
      borderColor: '#4361ee',
      backgroundColor: 'rgba(67, 97, 238, 0.1)',
      borderWidth: 3,
      pointRadius: 5,
      tension: 0.3,
      fill: true
    }]
  };
  
  doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: ['#4361ee', '#10b981', '#f59e0b'],
      hoverOffset: 4
    }]
  };
  
  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: { beginAtZero: true, ticks: { precision: 0 } }
    }
  };
  
  doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' },
      tooltip: { callbacks: { label: ctx => `${ctx.label}: ${ctx.parsed} users` } }
    }
  };

  // User data
  users: any[] = [];
  filteredUsers: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    
  }

  

  

  
    
    
  

  logout(): void {
    // Implement your logout logic here
    console.log('User logged out');
  }
}