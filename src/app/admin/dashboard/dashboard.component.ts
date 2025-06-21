import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  connectedToday = 0;
  totalUsers = 0;
  totalOrders = 18800;
  totalSales = 35078;
  searchQuery = '';
  currentLang = 'en';

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
      legend: { display: true, position: 'bottom' }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
          callback: (value) => Number(value) % 1 === 0 ? value : undefined
        }
      }
    }
  };

  doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' },
      tooltip: {
        callbacks: {
          label: ctx => `${ctx.label}: ${ctx.parsed} users`
        }
      }
    }
  };

  users: any[] = [];
  filteredUsers: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
  this.userService.getUserConnections().subscribe((connections: Record<string, number>) => {
    // Transform the object into sorted arrays
    const entries = Object.entries(connections).sort(
      (a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime()
    );

    const labels = entries.map(([date]) =>
      new Date(date).toLocaleDateString(this.currentLang, { weekday: 'short' })
    );
    const data = entries.map(([, count]) => count);

    this.lineChartData = {
      labels: labels,
      datasets: [{
        ...this.lineChartData.datasets[0],
        data: data
      }]
    };

    this.connectedToday = data.length > 0 ? data[data.length - 1] : 0;
  });

  // Leave getUserCategories() unchanged
  this.userService.getUserCategories().subscribe((categories: Record<string, number>) => {
  const categoryData = Object.entries(categories).map(([category, count]) => ({
    category,
    count
  }));

  if (categoryData.length === 0) {
    categoryData.push({ category: 'Admin', count: 1 });
  }

  this.doughnutChartData = {
    labels: categoryData.map(item => item.category),
    datasets: [{
      ...this.doughnutChartData.datasets[0],
      data: categoryData.map(item => item.count)
    }]
  };
});


  this.refreshUsers();
}


  refreshUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
      this.totalUsers = users.length;
      this.filterUsers();
    });
  }

  filterUsers(): void {
    if (!this.searchQuery) {
      this.filteredUsers = [...this.users];
      return;
    }

    const query = this.searchQuery.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.userName?.toLowerCase().includes(query) ||
      user.userFirstName?.toLowerCase().includes(query) ||
      user.userLastName?.toLowerCase().includes(query) ||
      user.role?.some((r: any) => r.roleName?.toLowerCase().includes(query))
    );
  }
}
