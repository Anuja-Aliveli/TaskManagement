import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusColor'
})
export class StatusColorPipe implements PipeTransform {

  transform(status: string): string {
    switch (status) {
      case 'Pending':
        return 'badge badge-warning';  // Yellow/Orange
      case 'In Progress':
        return 'badge badge-primary';  // Blue
      case 'Completed':
        return 'badge badge-success';  // Green
      default:
        return 'badge badge-secondary'; // Default/Gray
    }
  }
}
